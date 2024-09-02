import redirectRules from './redirectRules';

export default defineNuxtRouteMiddleware((to) => {
  for (const rule of redirectRules.data) {
    if (to.path === rule.old_url) {
        return navigateTo(rule.new_url)
    }
  }   
});