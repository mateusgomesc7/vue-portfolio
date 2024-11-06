<template>
  <div
    class="d-flex flex-column my-16"
    :class="$vuetify.breakpoint.smAndDown ? 'px-4' : ''"
  >
    <div
      class="font-weight-bold mb-8"
      :class="
        $vuetify.breakpoint.smAndDown ? 'align-self-center text-h4' : 'text-h3'
      "
    >
      Projects
    </div>
    <div
      class="d-flex flex-wrap"
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'justify-space-around'
          : 'justify-space-between'
      "
    >
      <GroupProject
        v-for="(groupProject, index) in groupProjects"
        :key="index"
        :group-project="groupProject"
      />
    </div>
  </div>
</template>

<script>
import GroupProject from "@/components/projects/GroupProject.vue";

export default {
  name: "IndexProjects",
  components: { GroupProject },
  data: () => ({
    groupProjects: [
      [
        {
          title: "Computer Vision OCR",
          image: "assert2.svg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "python.svg" },
            { icon: "flask.svg" },
            { icon: "postgresql.svg" },
            { icon: "docker.svg" },
            { icon: "tensorflow.svg" },
          ],
        },
        {
          title: "Automation of Electrical Equipment Tests",
          image: "assert1.svg",
          description:
            "Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "typescript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
            { icon: "python.svg" },
            { icon: "flask.svg" },
          ],
        },
        {
          title: "IoT Automation",
          image: "assert3.svg",
          description:
            "Odit, quos, voluptates, quas, quia quae quibusdam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "javascript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
            { icon: "python.svg" },
            { icon: "flask.svg" },
          ],
        },
      ],
      [
        {
          title: "Payment Management",
          image: "foxconn1.svg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "javascript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
            { icon: "jest.svg" },
            { icon: "vuetify.svg" },
          ],
        },
        {
          title: "Access Control System",
          image: "foxconn2.svg",
          description:
            "Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "javascript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
            { icon: "jest.svg" },
            { icon: "vuetify.svg" },
          ],
        },
      ],
      [
        {
          title: "Lorem Ipsum",
          image: "foxconn.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "typescript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
          ],
        },
      ],
    ],
  }),
};
</script>
