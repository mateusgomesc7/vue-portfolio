<template>
  <div class="d-flex flex-column my-16">
    <div class="text-h3 font-weight-bold mb-8">Projects</div>
    <GroupProject
      v-for="(groupProject, index) in groupProjects"
      :key="index"
      :group-project="groupProject"
    />
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
          title: "Lorem Ipsum",
          image: "web-tests.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "typescript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
          ],
        },
        {
          title: "Anyhitng",
          image: "foxconn.png",
          description:
            "Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "typescript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
          ],
        },
        {
          title: "Anyhitng Too",
          image: "autonomous_car.gif",
          description:
            "Odit, quos, voluptates, quas, quia quae quibusdam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "typescript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
          ],
        },
      ],
      [
        {
          title: "Lorem Ipsum",
          image: "web-tests.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "typescript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
          ],
        },
        {
          title: "Anyhitng",
          image: "foxconn.png",
          description:
            "Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
          skills: [
            { icon: "typescript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
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
