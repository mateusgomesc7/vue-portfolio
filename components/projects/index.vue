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
    <div class="d-flex flex-wrap justify-space-around">
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
          title: "data.projects.project_2.title",
          image: "assert2.svg",
          description: "data.projects.project_2.description",
          skills: [
            { icon: "python.svg" },
            { icon: "flask.svg" },
            { icon: "postgresql.svg" },
            { icon: "docker.svg" },
            { icon: "tensorflow.svg" },
          ],
        },
        {
          title: "data.projects.project_1.title",
          image: "assert1.svg",
          description: "data.projects.project_1.description",
          skills: [
            { icon: "typescript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
            { icon: "python.svg" },
            { icon: "flask.svg" },
          ],
        },
        {
          title: "data.projects.project_3.title",
          image: "assert3.svg",
          description: "data.projects.project_3.description",
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
          title: "data.projects.project_4.title",
          image: "foxconn1.svg",
          description: "data.projects.project_4.description",
          skills: [
            { icon: "javascript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
            { icon: "jest.svg" },
            { icon: "vuetify.svg" },
          ],
        },
        {
          title: "data.projects.project_5.title",
          image: "foxconn2.svg",
          description: "data.projects.project_5.description",
          skills: [
            { icon: "javascript.svg" },
            { icon: "vuejs.svg" },
            { icon: "nuxt.svg", maxWidth: "23px" },
            { icon: "jest.svg" },
            { icon: "vuetify.svg" },
          ],
        },
      ],
    ],
  }),
};
</script>
