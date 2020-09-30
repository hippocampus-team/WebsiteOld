<template>
  <div id="contact-section" class="section">
    <div class="content-wrapper">
      <div class="contacts-email-wrapper">
        <TitleText text="Email" textColor="on-background"
                   uppertext="Написать нам на" uppertextColor="on-background"/>

        <Contact v-for="(contact, i) in contacts" :key="i"
                 :name="contact.name" :info="contact.email"
                 :link="contact.email | emailToMailtoLink"
                 textColor="on-background"/>
      </div>

      <div class="contacts-tg-wrapper">
        <TitleText text="Telegram" textColor="on-secondary"
                   uppertext="Или в" uppertextColor="on-secondary"
                   :reverseAlign="true"/>

        <Contact v-for="(contact, i) in contacts" :key="i"
                 :name="contact.name" :info="contact.tg | at"
                 :link="contact.tg | tgToLink"
                 textColor="on-secondary" :reverseAlign="true"/>
      </div>
    </div>
  </div>
</template>

<script>

import TitleText from "@/components/TitleText";
import Contact from "@/components/Contact";
export default {
  name: 'ContactSection',
  components: {Contact, TitleText},
  data() {
    return {
      contacts: [
        {
          email: "levada.an@yandex.ru",
          tg: "not_hello_world",
          name: "Андрею"
        },
        {
          email: "duck.shelter@gmail.com",
          tg: "DablSi",
          name: "Соне"
        }
      ]
    }
  },
  filters: {
    emailToMailtoLink(email) {
      return "mailto:" + email;
    },
    tgToLink(username) {
      return "tg://resolve?domain=" + username;
    },
    at(value) {
      return "@" + value;
    }
  },
  mounted() {
    fetch('https://cv-hippocampus.herokuapp.com/contacts')
        .then(response => response.json())
        .then(data => {
          this.contacts = data;
        });
  }
}
</script>

<style scoped lang="scss">
.content-wrapper {
  margin-top: base.$unit * 1.5;
  margin-bottom: base.$unit;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title-wrapper {
    margin-bottom: 80px;

    @media screen and (max-width: base.$mwLarge) {
      margin-bottom: 60px;
    }

    @media screen and (max-width: base.$mwMedium) {
      margin-bottom: 48px;
    }

    @media screen and (max-width: base.$mwNormal) {
      margin-bottom: 36px;
    }
  }

  .contact-wrapper {
    margin-bottom: 28px;
  }
}

.section:before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;

  z-index: -1;

  width: base.$unit * 6.3;
  height: base.$unit * 5.8;

  background: url("../../assets/contact-blob.svg") 0 0/100% auto no-repeat;
}
</style>
