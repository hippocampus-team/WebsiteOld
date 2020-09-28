<template>
  <div id="contact-section" class="section">
    <div class="content-wrapper">
      <div class="contact-form-wrapper">
        <TitleText text="Email" textColor="on-surface"
                   uppertext="Написать на" uppertextColor="on-surface"/>

        <div class="contacts-wrapper">
          <TitleText v-for="(contact, i) in contacts" :key="i" class="contact"
                     :text="contact.name" textColor="on-surface"
                     :uppertext="contact.email" uppertextColor="primary"
                     :upperLink="contact.email | emailToMailtoLink"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TitleText from "@/components/TitleText";
export default {
  name: 'ContactSection',
  components: {TitleText},
  data() {
    return {
      contacts: [
        {
          email: "levada.an@yandex.ru",
          name: "Всем"
        },
        {
          email: "levada.an@yandex.ru",
          name: "Андрею"
        },
        {
          email: "levada.an@yandex.ru",
          name: "Соне"
        }
      ]
    }
  },
  filters: {
    emailToMailtoLink(email) {
      return "mailto:" + email;
    }
  }
}
</script>

<style scoped lang="scss">
.contact-form-wrapper {
  padding: 80px;

  @include base.default-box-shadow();
  background-color: base.$surfaceColor;
  border-radius: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .contacts-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
  }
}

.content-wrapper {
  margin-bottom: base.$unit;
}
</style>
