<template>
    <header class="header_section long_section px-0">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <router-link class="navbar-brand" to="/">
          <span>
            Edgecut
          </span>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/furniture">Furnitures</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/blog">Blog</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact Us</router-link>
              </li>
            </ul>
          </div>
          <div class="quote_btn-container">
            <router-link to="">
              <span>
                Login
              </span>
              <i class="fa fa-user" aria-hidden="true"></i>
            </router-link>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <!-- <router-view></router-view> -->
  </template>
  
  <script>
  export default {
    name: 'App',
  }
  </script>
  
  
  