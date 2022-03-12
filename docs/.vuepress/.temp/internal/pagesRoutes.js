import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Guide"},["/index.html","/README.md"]],
  ["v-f411d42e","/config/cop.html",{"title":"Options"},["/config/cop","/config/cop.md"]],
  ["v-79a80100","/config/front-matter.html",{"title":"Front Matter"},["/config/front-matter","/config/front-matter.md"]],
  ["v-040f4d5c","/config/palette.html",{"title":"Palette"},["/config/palette","/config/palette.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
