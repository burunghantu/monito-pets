import { basename, resolve } from 'path'
import type { Import, Unimport } from 'unimport'
import { addTemplate, defineNuxtModule } from '@nuxt/kit'
import debug from 'debug'

const padding = ' '.repeat(4)
const autoImportEslint = defineNuxtModule({
  setup(_, nuxt) {
    // console.log('autoImportEslint', _)
    const autoImports: { [key: string]: string[] } = {
      // global imports
      global: [
        '$fetch',
        'useCloneDeep',
        'defineNuxtConfig',
        'definePageMeta',
        'defineI18nConfig',
        'defineEventHandler',
        'defineI18nRoute',
        'useSwitchLocalePath',
        'useI18n',
        'useLocalePath',
        'cachedEventHandler'
      ]
    }

    nuxt.hook('imports:context', async (context: Unimport) => {
      const imports = await context.getImports()
      imports.forEach(autoImport => {
        const list = autoImports[autoImport.from] || []
        const name = autoImport.as
          ? autoImport.as!.toString()
          : autoImport.name.toString()
        autoImports[autoImport.from] = list.concat([name])
      })
    })

    nuxt.hook('imports:extend', (composableImport: Import[]) => {
      // console.log('imports:extend', composableImport)
      autoImports.composables = composableImport.map(autoImport => {
        if (autoImport.as) return autoImport.as!.toString()
        return autoImport.name.toString()
      })
    })

    nuxt.hook('modules:done', () => {
      // console.log('autoImports', autoImports)

      const outDir = basename(nuxt.options.buildDir)
      const filename = '.eslint.globals.json'
      const fullPath = resolve(outDir, filename)

      const getContents = () => {
        // To prevent formatter accidentally fix padding of template string
        let contents = ''
        contents += '{\n'
        contents += '  "globals": {'
        for (const autoImport in autoImports) {
          contents += `\n${padding}// ${autoImport}`
          autoImports[autoImport].forEach(imp => {
            contents += '\n'
            contents += `${padding}"${imp}": "readonly",`
          })
        }
        contents = `${contents.slice(0, -1)}\n`
        contents += '  }\n'
        contents += '}\n'

        return contents
      }

      addTemplate({
        filename,
        getContents,
        write: true
      })

      const logAutoImport = debug('auto-import')

      logAutoImport(`globals file is generated at ${fullPath}`)
    })
  }
})

export default autoImportEslint
