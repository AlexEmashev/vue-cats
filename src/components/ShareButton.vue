<template>
  <div class="share">
    <button :disabled="disabled" class="btn btn-icon" @click="menuShown = !menuShown">
      <slot></slot>
    </button>
    <div class="share-backdrop" v-if="menuShown" @click="closeBackdrop" id="shareMenuBackdrop">
      <div class="share-menu">
        <ul class="share-buttons">
          <li>
            <a
              :href="getHref('facebook')"
              title="Share on Facebook"
              target="_blank"
              @click="menuShown = !menuShown"
            >
              <img alt="Share on Facebook" src="/Facebook.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('tweeter')"
              target="_blank"
              title="Tweet"
              @click="menuShown = !menuShown"
            >
              <img alt="Tweet" src="/Twitter.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('pinterest')"
              target="_blank"
              title="Pin it"
              @click="menuShown = !menuShown"
            >
              <img alt="Pin it" src="/Pinterest.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('reddit')"
              target="_blank"
              title="Submit to Reddit"
              @click="menuShown = !menuShown"
            >
              <img alt="Submit to Reddit" src="/Reddit.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('linkedin')"
              target="_blank"
              title="Share on LinkedIn"
              @click="menuShown = !menuShown"
            >
              <img alt="Share on LinkedIn" src="/LinkedIn.png">
            </a>
          </li>
          <li>
            <a
              :href="getHref('mail')"
              target="_blank"
              title="Send email"
              @click="menuShown = !menuShown"
            >
              <img alt="Send email" src="/Email.png">
            </a>
          </li>
        </ul>
        <div class="share-menu-direct">
          <span>URL:</span>
          <input :value="getHref('direct')" type="text" id="directLinkInput">
          <button title="Copy to Clipboard"
            @click="copyToClipboard()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
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
        facebook:
          "https://www.facebook.com/sharer/sharer.php?u={{getURL}}&quote={{getTitle}}",
        tweeter:
          "https://twitter.com/intent/tweet?source={{getURL}}&text={{getTitle}}:%20{{getURL}}",
        pinterest:
          "http://pinterest.com/pin/create/button/?url={{getURL}}&description={{getDescription}}",
        reddit:
          "http://www.reddit.com/submit?url={{getURL}}&title={{getTitle}}",
        linkedin:
          "http://www.linkedin.com/shareArticle?mini=true&url={{getURL}}&title={{getTitle}}&summary={{getDescription}}&source={{getURL}}",
        mail:
          "mailto:?subject={{getTitle}}&body={{getDescription}}:%20{{getURL}}"
      }
    };
  },
  props: ["url", "shareTitle", "shareDescription", "disabled"],
  computed: {},
  methods: {
    closeBackdrop(e) {
      const shareMenuEl = document.getElementById("shareMenuBackdrop");
      if (e.target === shareMenuEl) {
        this.menuShown = 0;
      }
    },
    copyToClipboard() {
      document.getElementById("directLinkInput").select();
      document.execCommand("copy");
      this.menuShown = 0;
    },
    getHref(resource) {
      let resourceHref = "";
      switch (resource) {
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
          resourceHref = this.url;
          break;
      }

      resourceHref = resourceHref.replace(
        /\{\{getTitle\}\}/g,
        encodeURI(this.shareTitle)
      );
      resourceHref = resourceHref.replace(
        /\{\{getDescription\}\}/g,
        encodeURI(this.shareDescription)
      );
      resourceHref = resourceHref.replace(
        /\{\{getURL\}\}/g,
        encodeURI(this.url)
      );

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
    position: fixed;
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $control-bg-inactive-color;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: $bg-color;
    border-radius: $control-border-radius;
    padding: 13px 15px;
  }
  &-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    width: 100%;

    li {
      width: 43px;
      height: 43px;
      box-sizing: border-box;
      padding: 5px;
      display: inline-block;
      a {
        display: inline-block;
      }
    }
  }

  .share-menu-direct {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      flex: 0;
      padding-right: 10px;
    }
    input {
      flex: 1;
      border: 1px solid $bg-darker-color;
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
      svg {
        height: 14px;
        width: 14px;

      }
    }
  }
}
</style>