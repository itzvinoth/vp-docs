<template>
	<div class="su-toast-groups">
		<div v-for="o in orientations" :key="o" :class="o" class="su-toast-group">
			<transition-group name="toast-list" tag="div">
				<div v-for="toast in toasts[o]" :key="toast.id" :class="toast.classes"
					@mouseover="handleToastHover(toast)" @mouseleave="handleToastLeave(toast)">
					<div :class="['su-toast-icon', 'icon', icons[toast.type]]"></div>
					<div class="message">{{ toast.message }}</div>
					<span class="icon icon-times close" v-if="toast.closable" @click="remove(toast.id, toast.orientation)"></span>
				</div>
			</transition-group>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		eventBus: null
	},
	data () {
		const types = {
			INFO: "INFO",
			SUCCESS: "SUCCESS",
			ERROR: "ERROR",
			WARNING: "WARNING",
			LOADING: "LOADING"
		}

		const icons = {
			INFO: "icon-info",
			SUCCESS: "icon-check",
			ERROR: "icon-alert-triangle",
			WARNING: "icon-alert-triangle",
			LOADING: "loading"
		}

		const orientations = {
			TOP_LEFT: "su-toast-top-left",
			TOP_CENTER: "su-toast-top-center",
			TOP_RIGHT: "su-toast-top-right",
			BOTTOM_LEFT: "su-toast-bottom-left",
			BOTTOM_CENTER: "su-toast-bottom-center",
			BOTTOM_RIGHT: "su-toast-bottom-right"
		}

		return {
			// This holds a key for each orientation and the individual
			// toasts are inserted into those as lists.
			toasts: {},
			test: null,
			types: types,
			orientations: orientations,
			icons: icons,
			default: {
				message: "",
				duration: 3000,
				class: "info",
				type: types.INFO,
				closable: true,
				orientation: orientations.TOP_RIGHT
			}
		}
	},
	created () {
		if (!this.eventBus) {
			throw Error("Missing 'event-bus' property in toast")
		}

		// Create the stacks for each orientation.
		for (let k in this.orientations) {
			this.toasts[this.orientations[k]] = []
		}

		// Bind the toast event.
		this.eventBus.$on("su-toast", this.insert)
	},
	methods: {
		// Public handler for showing a toast.
		insert (toast) {
			// Assign a random ID to the toast element.
			let id = "toast-" + Math.floor(Math.random() * 100000)
			let toastClass = toast.class || this.default.class
			let toastTypeClass = (toast.type || this.default.type).toLowerCase()

			let classes = {
				"su-toast-item": true,
				[toastTypeClass]: true,
				[toastClass]: true
			}

			// Merge default params.
			let t = {id, ...this.default, ...toast, classes}

			t.timer = window.setTimeout(() => {
				this.remove(id, t.orientation)
			}, t.duration)

			var newToasts = { ...this.toasts }
			newToasts[t.orientation].push(t)
			this.toasts = newToasts
		},
		remove (id, orientation) {
			if (!id || !orientation) {
				return
			}

			let newToasts = { ...this.toasts }
			let newItems = []
			for (let item of newToasts[orientation]) {
				if (item.id !== id) {
					newItems.push(item)
				}
			}

			newToasts[orientation] = newItems
			this.toasts = newToasts
		},
		// Clean current toast timer to stop removing it
		handleToastHover (toast) {
			if (toast.timer) window.clearTimeout(toast.timer)
		},
		// Start timer to remove after mouseleave
		handleToastLeave (toast) {
			toast.timer = window.setTimeout(() => {
				this.remove(toast.id, toast.orientation)
			}, toast.duration)
		}
	}
}
</script>
