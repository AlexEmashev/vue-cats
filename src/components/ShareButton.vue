<template>
  <div class="share">
    <button :disabled="disabled" class="btn btn-icon" @click="menuShown = !menuShown">
      <slot></slot>
    </button>
    <div class="share-backdrop" v-if="menuShown" @click="menuShown = !menuShown">
      <div class="share-menu">
        <ul class="share-buttons">
          <li>
            <a
              :href="getHref('facebook')"
              title="Share on Facebook"
              target="_blank"
            >
              <img alt="Share on Facebook" src="/Facebook.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('tweeter')"
              target="_blank"
              title="Tweet"
            >
              <img alt="Tweet" src="/Twitter.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('pinterest')"
              target="_blank"
              title="Pin it"
            >
              <img alt="Pin it" src="/Pinterest.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('reddit')"
              target="_blank"
              title="Submit to Reddit"
            >
              <img alt="Submit to Reddit" src="/Reddit.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('linkedin')"
              target="_blank"
              title="Share on LinkedIn"
            >
              <img alt="Share on LinkedIn" src="/LinkedIn.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('mail')"
              target="_blank"
              title="Send email"
            >
              <img alt="Send email" src="/Email.png">
            </a>
          </li>
        </ul>
        <div class="share-menu-direct">
          <span>URL</span><input :value="getHref('direct')" type="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuShown: 0,
      hrefTemplates: {
        facebook: "https://www.facebook.com/sharer/sharer.php?u={{getURL}}&quote={{getTitle}}",
        tweeter: "https://twitter.com/intent/tweet?source={{getURL}}&text={{getTitle}}:%20{{getURL}}",
        pinterest: "http://pinterest.com/pin/create/button/?url={{getURL}}&description={{getDescription}}",
        reddit: "http://www.reddit.com/submit?url={{getURL}}&title={{getTitle}}",
        linkedin: "http://www.linkedin.com/shareArticle?mini=true&url={{getURL}}&title={{getTitle}}&summary={{getDescription}}&source={{getURL}}",
        mail: "mailto:?subject={{getTitle}}&body={{getDescription}}:%20{{getURL}}"
      }
    };
  },
  props: [
    "url",
    "shareTitle",
    "shareDescription",
    "disabled"
  ],
  computed: {
  },
  methods: {
    getHref(resource) {
      let resourceHref = "";
      switch (resource){ 
        case "facebook":
          resourceHref = this.hrefTemplates.facebook;
          break;
        case "tweeter":
          resourceHref = this.hrefTemplates.tweeter;
          break;
        case "pinterest":
          resourceHref = this.hrefTemplates.pinterest;
          break;
        case "reddit":
          resourceHref = this.hrefTemplates.reddit;
          break;
        case "linkedin":
          resourceHref = this.hrefTemplates.linkedin;
          break;
        case "mail":
          resourceHref = this.hrefTemplates.mail;
          break;
        default:
          console.log(this.url);
          resourceHref = this.url;
          break;
        }

      resourceHref = resourceHref.replace(/\{\{getTitle\}\}/g, encodeURI(this.shareTitle));
      resourceHref = resourceHref.replace(/\{\{getDescription\}\}/g, encodeURI(this.shareDescription));
      resourceHref = resourceHref.replace(/\{\{getURL\}\}/g, encodeURI(this.url));

      return resourceHref;
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
@import "../../styles/style.scss";
.share {
  display: inline-block;
  &-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $control-bg-inactive-color;
  }
}
</style>