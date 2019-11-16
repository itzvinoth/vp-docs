<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header"></slot>
					</div>

					<div class="modal-body">
						<slot name="body"></slot>
					</div>

					<div class="modal-footer">
						<slot name="footer"></slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>

	export default {
		name: "modal",
		props: {
			closeOnClick: {
				type: Boolean,
				default: true
			},
			zIndex: {
				type: Number,
				default: 15
			}
		},
		data () {
			return {
				keyboardShortcutEvents: [
					// Close on escape
					{ keys: ["27"], cb: this.close, stop: true, prevent: true }
				]
			}
		},
		mounted () {
			this.$nextTick(() => {
				if (this.closeOnClick) {
					window.addEventListener("click", this.closeOnDocumentClick)
				}

				this.$el.style.zIndex = this.zIndex
				document.body.classList.add("modal-open")
			})
		},
		beforeDestroy () {
			window.removeEventListener("click", this.closeOnDocumentClick)
		},
		methods: {
			closeOnDocumentClick (event) {
				// If clicked in modal wrapper than close the popup
				if (event.target === this.$el || event.target === this.$el.querySelector(".modal-wrapper")) {
					this.close()
				}
			},
			close () {
				this.$emit("close")
				document.body.classList.remove("modal-open")
			}
		}
	}
</script>

