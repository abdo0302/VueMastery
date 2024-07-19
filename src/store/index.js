import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router/index';

export default createStore({
  state: {
    login:'login',
    users:{},
    posts:{},
    comments:[],
    showComats:false,
    showFormPost:false,
    main:'Posts',
    todos:{}
  },
  mutations: {
    setLogin(state){
      state.login='login'
    },
    setSginUp(state){
      state.login='sgin-up'
    },
    setPost(state,posts){
      state.posts=posts;
    },
    setUsers(state,users){
      state.users=users;
      },
    setComments(state,comments){
      state.comments=comments;
    },
    setshowComments(state,isShow){
      state.showComats=isShow;
    },
    setshowFormPost(state,isShow){
      state.showFormPost=isShow;
    },
    setMain(state,main){
      state.main=main;
    },
    setTodos(state,todos){
      state.todos=todos;
    }  


  },
  actions: {
   async sinup(context,user){
    try {
      const response = await axios.post('http://localhost:3000/users',user);
      context.commit('setLoginUser', response.data);
      let min = 10000000000000000000000;
      let max = 200000000000000000000000;
      let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      sessionStorage.setItem('username', randomInt);

    } catch (error) {
      console.error('Error creating user:', error);
    }
  },
  async login(context,user){
    try {
      const response = await axios.get(`http://localhost:3000/users?email=${user.email}&&password=${user.password}`);
      const foundUser = response.data.find(usere => usere.email === user.email && usere.password === user.password);
      if(foundUser){
        let min = 10000000000000000000000;
        let max = 200000000000000000000000;
        let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        sessionStorage.setItem('tokan', randomInt);
        sessionStorage.setItem('user', foundUser.name);
        sessionStorage.setItem('email', foundUser.email);
        sessionStorage.setItem('img', foundUser.img);
        sessionStorage.setItem('id', foundUser.id);
        router.push('/dashboard');
      }
        
      } catch (error) {
        console.error('Error creating user:', error);
        }
        },
  async getPosts(context){
    try{
      const response = await axios.get(`http://localhost:3000/posts`);
      context.commit('setPost', response.data);
    }catch(error){
      console.error('Error:', error);
    }
  },
  async getUsers(context){
    try{
      const response = await axios.get(`http://localhost:3000/users`);
      context.commit('setUsers', response.data);
    }catch(error){
      console.error('Error:', error);
    }
  },
  async getComments(context,id){
    try{
      const response=await axios.get('http://localhost:3000/comments?postId='+id);
      context.commit('setComments', response.data);
    }catch(error){
      console.error('Error:', error);
    }

  },
  async postComments(context,items){
    try{
      console.log(items);
      const response=await axios.post('http://localhost:3000/comments',items)
    }catch(error){
      console.error('Error:', error);
    }

  },
  async addpost(context,items){
    try{
      const response=await axios.post('http://localhost:3000/posts',items)
      location.reload();
    }catch(error){
      console.error('Error:', error);
    }
  },
  async getTodos(context,id){
    try{
    const response=await axios.get('http://localhost:3000/todos?userId='+id)
    context.commit('setTodos', response.data);
    }catch(error){
    console.error('Error:', error);
    }
  },
  async deletTodo(context,id){
    try{
      const response=await axios.delete('http://localhost:3000/todos/'+id)
      location.reload();
    }catch(error){
      console.error('Error:', error);
    }
  }
  
        
      
  },
  getters: {}
});
