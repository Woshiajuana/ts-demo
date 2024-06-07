import { add } from './add.js'
import { sub } from './sub.js'

import { omit } from '@daysnap/utils'

import { unpluginFactory } from 'unplugin-vue-markdown'

import { kebabCase } from 'unplugin-vue-components'

const result = add(sub(2, 1), 1)

console.log('result => ', result)

const xx = omit({ x: '1', y: '2' }, ['x'])


interface Fetcher {
  getObject(done: (data: unknown, elapsedTime: number) => void): void;
}

const fetcher: Fetcher = {
  getObject (done) {
    done('x', 2)
  }
}

fetcher.getObject(() => {
  //
})