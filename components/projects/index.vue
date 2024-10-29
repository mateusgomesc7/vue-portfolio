<template>
  <div class="d-flex flex-column">
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
          age: 2023,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
        },
        {
          title: "Anyhitng",
          age: 2024,
          description:
            "Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
        },
        {
          title: "Anyhitng Too",
          age: 2025,
          description:
            "Odit, quos, voluptates, quas, quia quae quibusdam dolorum possimus ipsam deleniti ex maiores hic inventore!",
        },
      ],
      [
        {
          title: "Lorem Ipsum",
          age: 2026,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
        },
      ],
      [
        {
          title: "Lorem Ipsum",
          age: 2026,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas eligendi! Eligendi similique sequi, sit sunt, mollitia, nam quia odio quibusdam magnam dolorum possimus ipsam deleniti ex maiores hic inventore!",
        },
      ],
    ],
  }),
};
</script>
