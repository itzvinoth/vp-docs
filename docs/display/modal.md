## Modal

When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information.

```vue
<su-modal v-if="showModal" @close="hideModalPopup()">
    <div slot="header">Modal header</div>
    <div slot="body">Content text goes here...</div>
    <div slot="footer" class="actions">Footer text is here...</div>
</su-modal>
```

<br>
<div>
    <su-button class="button button-blue" @click.native="showModalPopup">Open Popup</su-button>
    <su-modal v-if="showModal" @close="hideModalPopup()">
        <h2 slot="header">Modal header</h2>
        <div slot="body">
            <span>Modal content goes here</span><br><br>
            <span>Modal content goes here</span>
        </div>
        <div slot="footer" class="actions">
            <su-button class="button-blue" @click.native="continueAction">
                <span>Continue</span>
            </su-button>
            <su-button class="button-outline" @click.native="hideModalPopup">
                <span>Cancel</span>
            </su-button>
        </div>
    </su-modal>
</div>

<script>
import Vue from 'vue'
export default {
    data () {
        return {
            showModal: false
        }
    },
    methods: {
        showModalPopup: function () {
            this.showModal = true
        },
        hideModalPopup: function () {
            this.showModal = false
        },
        continueAction: function () {
            console.log('continue with popup action')
            this.showModal = false
        }
    }
}
</script>