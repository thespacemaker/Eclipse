<script setup lang="ts">
const formData = ref({
  name: '',
  email: '',
  msg: '',
})
</script>

<template>
  <div class="py-12 min-w-[50%] flex flex-col justify-center items-center">
    <form
      action="https://formspree.io/f/xgebkbeo"
      method="POST"
    >
      <FormKit
        v-model="formData"
        type="group"
      >
        <FormKit
          class="min-w-[200px]"
          type="text"
          :classes="{
            input: 'change',
          }"
          name="name"
          validation="required|length:2"
          label="Please enter your full name"
          placeholder="Full Name"
        />
        <FormKit
          type="email"
          name="email"
          :classes="{
            input: 'change',
          }"
          label="Please enter your email"
          validation="email"
          placeholder="Email"
        />
        <FormKit
          type="textarea"
          name="msg"
          :classes="{
            input: 'change',
          }"
          validation="required|length:3"
          label="Please enter your message"
          placeholder="Message"
        />
        <button type="submit">
          Send
        </button>
      </FormKit>
    </form>
  </div>
</template>

<style>
.change {
  color: white;
}

.formkit-inner {
  color: white;
}
.formkit-inner::after {
  display: block;
  padding: 0.5em;
}
</style>
