// vite.config.ts
import { fileURLToPath } from "node:url";
import laravel from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/laravel-vite-plugin@1.0.5_vite@5.3.5_@types+node@22.0.0_sass@1.76.0_/node_modules/laravel-vite-plugin/dist/index.js";
import VueI18nPlugin from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.22.5_vue-i18n@9.13.1_vue@3.4.35_typescript@5.5.4___webpack-sources@3.2.3/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import vue from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/@vitejs+plugin-vue@5.1.1_vite@5.3.5_@types+node@22.0.0_sass@1.76.0__vue@3.4.35_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.0_vite@5.3.5_@types+node@22.0.0_sass@1.76.0__vue@3.4.35_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import AutoImport from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@10.11.0_vue@3.4.35_typescript@5.5.4___rollup@4.22.5_webpack-sources@3.2.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/unplugin-vue-components@0.27.3_@babel+parser@7.25.6_rollup@4.22.5_vue@3.4.35_typescript@5.5.4__webpack-sources@3.2.3/node_modules/unplugin-vue-components/dist/vite.js";
import { VueRouterAutoImports, getPascalCaseRouteName } from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.22.5_vue-router@4.4.0_vue@3.4.35_typescript@5.5.4___vue@3._kl3oo7oqnek5r5ea3aj4bu7zb4/node_modules/unplugin-vue-router/dist/index.mjs";
import VueRouter from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.22.5_vue-router@4.4.0_vue@3.4.35_typescript@5.5.4___vue@3._kl3oo7oqnek5r5ea3aj4bu7zb4/node_modules/unplugin-vue-router/dist/vite.mjs";
import { defineConfig } from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/vite@5.3.5_@types+node@22.0.0_sass@1.76.0/node_modules/vite/dist/node/index.js";
import Layouts from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.5_@types+node@22.0.0_sass@1.76.0__vue-router@4.4.0_vu_hnmmmcenrkm4u2yybj6t6hwyli/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import vuetify from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/vite-plugin-vuetify@2.0.3_vite@5.3.5_@types+node@22.0.0_sass@1.76.0__vue@3.4.35_typescript@5.5.4__vuetify@3.6.13/node_modules/vite-plugin-vuetify/dist/index.mjs";
import svgLoader from "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.4.35_typescript@5.5.4_/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/omerfaruktanir/Downloads/testler/OFT-Template/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    // Docs: https://github.com/posva/unplugin-vue-router
    // ℹ️ This plugin should be placed before vue plugin
    VueRouter({
      getRouteName: (routeNode) => {
        return getPascalCaseRouteName(routeNode).replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
      },
      beforeWriteFiles: (root) => {
        root.insert("/apps/email/:filter", "/resources/ts/pages/apps/email/index.vue");
        root.insert("/apps/email/:label", "/resources/ts/pages/apps/email/index.vue");
      },
      routesFolder: "resources/ts/pages"
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "swiper-container" || tag === "swiper-slide"
        },
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    laravel({
      input: ["resources/ts/main.ts"],
      refresh: true
    }),
    vueJsx(),
    // Docs: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
    vuetify({
      styles: {
        configFile: "resources/styles/variables/_vuetify.scss"
      }
    }),
    // Docs: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: "./resources/ts/layouts/"
    }),
    // Docs: https://github.com/antfu/unplugin-vue-components#unplugin-vue-components
    Components({
      dirs: ["resources/ts/@core/components", "resources/ts/views/demos", "resources/ts/components"],
      dts: true,
      resolvers: [
        (componentName) => {
          if (componentName === "VueApexCharts")
            return { name: "default", from: "vue3-apexcharts", as: "VueApexCharts" };
        }
      ]
    }),
    // Docs: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import
    AutoImport({
      imports: ["vue", VueRouterAutoImports, "@vueuse/core", "@vueuse/math", "vue-i18n", "pinia"],
      dirs: [
        "./resources/ts/@core/utils",
        "./resources/ts/@core/composable/",
        "./resources/ts/composables/",
        "./resources/ts/utils/",
        "./resources/ts/plugins/*/composables/*"
      ],
      vueTemplate: true,
      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ["useCookies", "useStorage"]
    }),
    // Docs: https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n#intlifyunplugin-vue-i18n
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(new URL("./resources/ts/plugins/i18n/locales/**", __vite_injected_original_import_meta_url))
      ]
    }),
    svgLoader()
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@core-scss": fileURLToPath(new URL("./resources/styles/@core", __vite_injected_original_import_meta_url)),
      "@": fileURLToPath(new URL("./resources/ts", __vite_injected_original_import_meta_url)),
      "@themeConfig": fileURLToPath(new URL("./themeConfig.ts", __vite_injected_original_import_meta_url)),
      "@core": fileURLToPath(new URL("./resources/ts/@core", __vite_injected_original_import_meta_url)),
      "@layouts": fileURLToPath(new URL("./resources/ts/@layouts", __vite_injected_original_import_meta_url)),
      "@images": fileURLToPath(new URL("./resources/images/", __vite_injected_original_import_meta_url)),
      "@styles": fileURLToPath(new URL("./resources/styles/", __vite_injected_original_import_meta_url)),
      "@configured-variables": fileURLToPath(new URL("./resources/styles/variables/_template.scss", __vite_injected_original_import_meta_url)),
      "@db": fileURLToPath(new URL("./resources/ts/plugins/fake-api/handlers/", __vite_injected_original_import_meta_url)),
      "@api-utils": fileURLToPath(new URL("./resources/ts/plugins/fake-api/utils/", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    chunkSizeWarningLimit: 5e3
  },
  optimizeDeps: {
    exclude: ["vuetify"],
    entries: [
      "./resources/ts/**/*.vue"
    ]
  },
  server: {
    hmr: {
      overlay: false
      // Hata kaplamasını devre dışı bırakır
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvb21lcmZhcnVrdGFuaXIvRG93bmxvYWRzL3Rlc3RsZXIvT0ZULVRlbXBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvb21lcmZhcnVrdGFuaXIvRG93bmxvYWRzL3Rlc3RsZXIvT0ZULVRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9vbWVyZmFydWt0YW5pci9Eb3dubG9hZHMvdGVzdGxlci9PRlQtVGVtcGxhdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJ1xuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cywgZ2V0UGFzY2FsQ2FzZVJvdXRlTmFtZSB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCB2dWV0aWZ5IGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZXRpZnknXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFsvLyBEb2NzOiBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAvLyBcdTIxMzlcdUZFMEYgVGhpcyBwbHVnaW4gc2hvdWxkIGJlIHBsYWNlZCBiZWZvcmUgdnVlIHBsdWdpblxuICAgIFZ1ZVJvdXRlcih7XG4gICAgICBnZXRSb3V0ZU5hbWU6IHJvdXRlTm9kZSA9PiB7XG4gICAgICAvLyBDb252ZXJ0IHBhc2NhbCBjYXNlIHRvIGtlYmFiIGNhc2VcbiAgICAgICAgcmV0dXJuIGdldFBhc2NhbENhc2VSb3V0ZU5hbWUocm91dGVOb2RlKVxuICAgICAgICAgIC5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDEtJDInKVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVXcml0ZUZpbGVzOiByb290ID0+IHtcbiAgICAgICAgcm9vdC5pbnNlcnQoJy9hcHBzL2VtYWlsLzpmaWx0ZXInLCAnL3Jlc291cmNlcy90cy9wYWdlcy9hcHBzL2VtYWlsL2luZGV4LnZ1ZScpXG4gICAgICAgIHJvb3QuaW5zZXJ0KCcvYXBwcy9lbWFpbC86bGFiZWwnLCAnL3Jlc291cmNlcy90cy9wYWdlcy9hcHBzL2VtYWlsL2luZGV4LnZ1ZScpXG4gICAgICB9LFxuXG4gICAgICByb3V0ZXNGb2xkZXI6ICdyZXNvdXJjZXMvdHMvcGFnZXMnLFxuICAgIH0pLFxuICAgIHZ1ZSh7XG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBpc0N1c3RvbUVsZW1lbnQ6IHRhZyA9PiB0YWcgPT09ICdzd2lwZXItY29udGFpbmVyJyB8fCB0YWcgPT09ICdzd2lwZXItc2xpZGUnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczoge1xuICAgICAgICAgIGJhc2U6IG51bGwsXG4gICAgICAgICAgaW5jbHVkZUFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgbGFyYXZlbCh7XG4gICAgICBpbnB1dDogWydyZXNvdXJjZXMvdHMvbWFpbi50cyddLFxuICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICB9KSxcbiAgICB2dWVKc3goKSwgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5LWxvYWRlci90cmVlL21hc3Rlci9wYWNrYWdlcy92aXRlLXBsdWdpblxuICAgIHZ1ZXRpZnkoe1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGNvbmZpZ0ZpbGU6ICdyZXNvdXJjZXMvc3R5bGVzL3ZhcmlhYmxlcy9fdnVldGlmeS5zY3NzJyxcbiAgICAgIH0sXG4gICAgfSksIC8vIERvY3M6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb2huY2FtcGlvbmpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzI3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXG4gICAgTGF5b3V0cyh7XG4gICAgICBsYXlvdXRzRGlyczogJy4vcmVzb3VyY2VzL3RzL2xheW91dHMvJyxcbiAgICB9KSwgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzI3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkaXJzOiBbJ3Jlc291cmNlcy90cy9AY29yZS9jb21wb25lbnRzJywgJ3Jlc291cmNlcy90cy92aWV3cy9kZW1vcycsICdyZXNvdXJjZXMvdHMvY29tcG9uZW50cyddLFxuICAgICAgZHRzOiB0cnVlLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIGNvbXBvbmVudE5hbWUgPT4ge1xuICAgICAgICAvLyBBdXRvIGltcG9ydCBgVnVlQXBleENoYXJ0c2BcbiAgICAgICAgICBpZiAoY29tcG9uZW50TmFtZSA9PT0gJ1Z1ZUFwZXhDaGFydHMnKVxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2RlZmF1bHQnLCBmcm9tOiAndnVlMy1hcGV4Y2hhcnRzJywgYXM6ICdWdWVBcGV4Q2hhcnRzJyB9XG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLCAvLyBEb2NzOiBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnQjdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFsndnVlJywgVnVlUm91dGVyQXV0b0ltcG9ydHMsICdAdnVldXNlL2NvcmUnLCAnQHZ1ZXVzZS9tYXRoJywgJ3Z1ZS1pMThuJywgJ3BpbmlhJ10sXG4gICAgICBkaXJzOiBbXG4gICAgICAgICcuL3Jlc291cmNlcy90cy9AY29yZS91dGlscycsXG4gICAgICAgICcuL3Jlc291cmNlcy90cy9AY29yZS9jb21wb3NhYmxlLycsXG4gICAgICAgICcuL3Jlc291cmNlcy90cy9jb21wb3NhYmxlcy8nLFxuICAgICAgICAnLi9yZXNvdXJjZXMvdHMvdXRpbHMvJyxcbiAgICAgICAgJy4vcmVzb3VyY2VzL3RzL3BsdWdpbnMvKi9jb21wb3NhYmxlcy8qJyxcbiAgICAgIF0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcblxuICAgICAgLy8gXHUyMTM5XHVGRTBGIERpc2FibGVkIHRvIGF2b2lkIGNvbmZ1c2lvbiAmIGFjY2lkZW50YWwgdXNhZ2VcbiAgICAgIGlnbm9yZTogWyd1c2VDb29raWVzJywgJ3VzZVN0b3JhZ2UnXSxcbiAgICB9KSwgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4biNpbnRsaWZ5dW5wbHVnaW4tdnVlLWkxOG5cbiAgICBWdWVJMThuUGx1Z2luKHtcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgICAgaW5jbHVkZTogW1xuICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcmVzb3VyY2VzL3RzL3BsdWdpbnMvaTE4bi9sb2NhbGVzLyoqJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIHN2Z0xvYWRlcigpLFxuICBdLFxuICBkZWZpbmU6IHsgJ3Byb2Nlc3MuZW52Jzoge30gfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQGNvcmUtc2Nzcyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9yZXNvdXJjZXMvc3R5bGVzL0Bjb3JlJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9yZXNvdXJjZXMvdHMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAdGhlbWVDb25maWcnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vdGhlbWVDb25maWcudHMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAY29yZSc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9yZXNvdXJjZXMvdHMvQGNvcmUnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAbGF5b3V0cyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9yZXNvdXJjZXMvdHMvQGxheW91dHMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAaW1hZ2VzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3Jlc291cmNlcy9pbWFnZXMvJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQHN0eWxlcyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9yZXNvdXJjZXMvc3R5bGVzLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0Bjb25maWd1cmVkLXZhcmlhYmxlcyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9yZXNvdXJjZXMvc3R5bGVzL3ZhcmlhYmxlcy9fdGVtcGxhdGUuc2NzcycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0BkYic6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9yZXNvdXJjZXMvdHMvcGx1Z2lucy9mYWtlLWFwaS9oYW5kbGVycy8nLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAYXBpLXV0aWxzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3Jlc291cmNlcy90cy9wbHVnaW5zL2Zha2UtYXBpL3V0aWxzLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA1MDAwLFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ3Z1ZXRpZnknXSxcbiAgICBlbnRyaWVzOiBbXG4gICAgICAnLi9yZXNvdXJjZXMvdHMvKiovKi52dWUnLFxuICAgIF0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogZmFsc2UsICAvLyBIYXRhIGthcGxhbWFzXHUwMTMxblx1MDEzMSBkZXZyZSBkXHUwMTMxXHUwMTVGXHUwMTMxIGJcdTAxMzFyYWtcdTAxMzFyXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThVLFNBQVMscUJBQXFCO0FBQzVXLE9BQU8sYUFBYTtBQUNwQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsc0JBQXNCLDhCQUE4QjtBQUM3RCxPQUFPLGVBQWU7QUFDdEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxhQUFhO0FBQ3BC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
