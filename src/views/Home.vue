<template>
  <main>
    <!-- <headerNav /> -->
    <landing id="landing" :cursor-element="cursorElement" />
    <!-- skill section -->
    <section id="skills" class="skills">
      <h2>技能</h2>
      <div class="skills-container">
        <skillCard
          v-for="(value, key) in skills"
          :key="key"
          :key-from-parent="key"
          :value-from-parent="value"
        />
      </div>
    </section>
    <!-- project section -->
    <section id="projects" class="projects">
      <h2>作品集</h2>
      <div class="projects-container" ref="projectsContainer">
        <projectCard
          v-for="(project, index) in projects"
          :key="index"
          :project-from-parent="project"
        />
      </div>
      <div class="discover-container">
        <a
          href="https://github.com/tzynwang"
          target="_blank"
          ref="projectsGitHub"
          >GitHub</a
        >上有更多作品
      </div>
    </section>
    <!-- working experience -->
    <section id="experience" class="experience">
      <h2>工作經歷</h2>
      <div class="experience-container">
        <experienceCard
          v-for="(experience, index) in experiences"
          :key="index"
          :experience-from-parent="experience"
        />
      </div>
    </section>
    <!-- contact form -->
    <section id="contact" class="contact">
      <h2>與我聯絡</h2>
      <div class="contact-container">
        <contactForm :cursor-element="cursorElement" />
      </div>
    </section>
  </main>
</template>

<script>
import { spinMixin } from '@/utils/mixins'

import landing from '@/components/landing.vue'
import skillCard from '@/components/skillCard.vue'
import projectCard from '@/components/projectCard.vue'
import experienceCard from '@/components/experienceCard.vue'
import contactForm from '@/components/contactForm.vue'

export default {
  name: 'Home',
  components: {
    landing,
    skillCard,
    projectCard,
    experienceCard,
    contactForm
  },
  props: ['cursorElement'],
  mixins: [spinMixin],
  data() {
    return {
      skills: {
        前端: ['HTML, (S)CSS, JavaScript', 'Vue', 'Bootstrap'],
        後端: ['Express', 'Mongoose ODM', 'RESTful API'],
        '協作、設計、專案管理工具': [
          'NPM',
          'Git',
          'Webpack',
          'Figma, Adobe Xd',
          'Jira, Trello'
        ]
      },
      projects: [
        {
          name: '四人協作專案 Simple Twitter',
          src: require('@/assets/images/simple-twitter.png'),
          links: [
            {
              title: '展示頁',
              url: 'https://tzynwang.github.io/simple-twitter-frontend/'
            },
            {
              title: 'GitHub',
              url:
                'https://github.com/tzynwang/simple-twitter-frontend#simple-twitter-frontend'
            },
            {
              title: '開發記錄',
              url:
                'https://tzynwang.github.io/2021/simple-twitter-development-note/'
            }
          ],
          feature:
            '在複刻推特的基礎互動功能之上，追加了使用webSocket技術實現的即時多人聊天功能。',
          accoutPass: ['user1', 12345678],
          res: [
            '設計稿元件拆分',
            'RWD與切版',
            '使用者註冊與登入、首頁、個人資料、設定頁與公開聊天室之功能實作'
          ],
          tech: ['Vue2', 'vuex', 'vue-router', 'axios', 'socket-io']
        },
        {
          name: 'HAKO: hug your hardcore',
          src: require('@/assets/images/hako.png'),
          links: [
            {
              title: '展示頁',
              url: 'https://tzynwang.github.io/ac_practice_2-2_chat_room/'
            },
            {
              title: 'GitHub',
              url:
                'https://github.com/tzynwang/ac_practice_2-2_chat_room/tree/service-worker'
            }
          ],
          feature:
            '一個隨時都能回應訊息的純前端聊天室專案；使用service worker將CSS、JS與圖示保存在快取中，優化critical rendering path。',
          tech: ['Bootstrap', 'vanilla JavaScript', 'axios', 'service worker']
        },
        {
          name: "Cat's filter property",
          src: require('@/assets/images/cat-filter.png'),
          links: [
            {
              title: '展示頁',
              url: 'https://tzynwang.github.io/SideProject_CSS-filter-property/'
            },
            {
              title: 'GitHub',
              url: 'https://github.com/tzynwang/SideProject_CSS-filter-property'
            }
          ],
          feature: '可編輯並即時觀察CSS filter視覺效果的模擬器，支援深色模式。',
          tech: ['CSS', 'vanilla JavaScript']
        }
      ],
      experiences: [
        {
          title: '產品經理',
          company: '瑪克多股份有限公司',
          time: '2020/02 - 2021/02',
          responsibilities: [
            '軟體產品管理：透過每天的站立會議確保工程師與產品經理的目標一致，讓核心功能可準時上線；每個月有92%的任務準時通過驗收並被部屬。',
            '介面設計：使用Figma設計影像記錄與調度軟體之UI，並透過Zeplin將設計發布給工程師並來回討論，修改不易實作之設計，避免消耗開發資源在非重點的事務上。',
            '手冊撰寫：維護全產品線之中英文說明書，製作簡易故障排除指南，減低FAE同仁工作負擔。'
          ]
        },
        {
          title: '海外業務專員',
          company: '大鵬科技股份有限公司',
          time: '2014/09 - 2019/09',
          responsibilities: [
            '專案管理：將客戶需求整理為軟、硬體團隊能充分理解的規格；與客戶協調，確認QA團隊與客戶雙方在驗收標準上有一致認知；一年處理約200項客製需求，90%於期限內順利交付。',
            '顧客關係維護：定期收集客戶反饋並進行產品迭代，負責的4成客戶業績位於全公司前20順位內。',
            '產品推銷：察覺新客戶之需求，介紹合適產品；80%的經手新客進入採購樣品之階段。'
          ]
        },
        {
          title: '顧問助理',
          company: '大英國協教育資訊中心',
          time: '2013/07 - 2014/09',
          responsibilities: [
            '根據學生需求提供務實的海外學校申請建議，並提供申請協助；90%的學生願意接納建議、並順利申請到學校。',
            '於留學展會中協助安排面試行程，98%的學生順利完成所有的面試。'
          ]
        }
      ]
    }
  },
  mounted() {
    this.$refs.projectsContainer.addEventListener(
      'mouseover',
      this.overAnchorAddSpin
    )

    this.$refs.projectsGitHub.addEventListener('mouseover', this.addSpin)
    this.$refs.projectsGitHub.addEventListener('mouseleave', this.removeSpin)
  },
  beforeDestroy() {
    this.$refs.projectsContainer.removeEventListener(
      'mouseover',
      this.overAnchorAddSpin
    )

    this.$refs.projectsGitHub.removeEventListener('mouseover', this.addSpin)
    this.$refs.projectsGitHub.removeEventListener('mouseleave', this.removeSpin)
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  margin-block: 0;
  padding: 0;
  box-sizing: border-box;
}

a:link,
a:hover,
a:visited,
a:active {
  display: inline-block;
  margin: 0 0.2rem 0 0;
  padding: 0 0.2rem 0 0;

  text-decoration: none;
  color: #f5f3f2;
  background-color: #909ab5;

  transition: 0.2s ease;

  &::before {
    content: '#';
    padding: 0 0.2rem 0 0.2rem;
  }
}

a:hover {
  color: #909ab5;
  background-color: transparent;
}

ul,
ol,
li {
  list-style: none;
}

input,
textarea,
button {
  outline: none;
  border: none;
  resize: none;

  font-family: inherit;
}

h2 {
  padding: 1rem 0;
}

h3 {
  padding: 0 0 1rem;
}

.pt-0 {
  padding-top: 0 !important;
}

.text-code {
  padding: 0 0.25rem;
  font-family: Courier New !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f4d4d;
}

.skills {
  background-color: #7e8e7b;
  color: #f5f3f2;
}

.skills-container {
  padding: 0 60px;
}

.projects {
  background-color: #7c7b7b;
  color: #f5f3f2;
}

.discover-container {
  padding: 1rem 0;
}

.experience {
  color: #f5f3f2;

  background-color: #3f4d4d;
  background-image: url('~@/assets/images/bg_exp.svg');
  background-size: cover;
  background-position: center;
}

.experience-container {
  background-color: #3f4d4d;
}

.contact {
  background-color: #909ab5;
  color: #f5f3f2;
}

.skills-container,
.experience-container,
.contact-container {
  max-width: 900px;
  margin: 0 auto;
}

.contact-container {
  max-width: 600px;
  padding: 1rem 0 2rem 0;
}

footer {
  background-color: #f5f3f2;
  padding: 0.5rem 0;
}

@media screen and (min-width: 600px) {
  .skills-container {
    display: flex;
  }
}
</style>
