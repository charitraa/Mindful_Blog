import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import { BlogPost } from './pages/blog-post';
import { About } from './pages/about';
import { ThemeSwitcher } from './components/theme-switcher';
import { UserProfile } from './pages/user-profile';
import { CreatePost } from './pages/create-post';
    
    import { Login } from './pages/auth/login';
    import { Signup } from './pages/auth/signup';
    import { ForgotPassword } from './pages/auth/forgot-password';
    import { MyPosts } from './pages/my-posts';
    import { Following } from './pages/following';
    import { SavedPosts } from './pages/saved-posts';
    
export default function App() {
  return (
    <Layout>
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/create" component={CreatePost} />
        <Route path="/post/:slug" component={BlogPost} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/my-posts" component={MyPosts} />
        <Route path="/following" component={Following} />
        <Route path="/saved-posts" component={SavedPosts} />
      </Switch>
    </Layout>
  );
}