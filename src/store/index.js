import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const moduleA = {
    state: {
        name: 'aaaa'
    },
    getters: {
        fullname(state) {
            return state.name + " bbbbbbbb"
        }
    },
    mutations: {
        actionUpdateModuleName(state, name) {
            state.name = name
        }
    }
}

const store = new Vuex.Store({
    state: {
        count: 0,
        name: '张三',
        students: [
            {
                id: 101,
                name: '刘备',
                age: 22
            },
            {
                id: 102,
                name: '关羽',
                age: 19
            },
            {
                id: 103,
                name: '张飞',
                age: 17
            },
            {
                id: 104,
                name: '赵云',
                age: 15
            }
        ]
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        addCount(state, count) {
            state.count += count
        },
        updateName(state, name) {
            state.name = name
        }
    },
    getters: {
        //属性读取
        more18ageStus(state) {
            return state.students.filter(s => s.age > 18);
        },
        //带参数的属性读取
        moreAgeStus(state) {
            return function (age) {
                return state.students.filter(s => s.age > age);
            }
        }
    },
    actions: {
        actionUpdateName(context, pyload) {
            console.log(pyload);

            return new Promise(function (resolve) {
                setTimeout(function () {
                    context.commit('updateName', pyload)
                    resolve('name修改完成')
                }, 1000)
            });
        }
    },
    modules: {
        a: moduleA
    }
})

export default store