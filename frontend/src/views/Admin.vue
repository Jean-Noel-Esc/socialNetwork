<template>
<body>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">GROUPOMANIA</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <div class="navbar-nav">
        <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">Sign out</a>
        </div>
    </div>
    </header>

    <div class="container-fluid">
    <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                Dashboard
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Orders
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="shopping-cart"></span>
                Products
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="users"></span>
                Customers
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                Reports
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="layers"></span>
                Integrations
                </a>
            </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
            </a>
            </h6>
            <ul class="nav flex-column mb-2">
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Current month
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Last quarter
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
                </a>
            </li>
            </ul>
        </div>
        </nav>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
            </button>
            </div>
        </div>

        <canvas class="my-4 w-100" id="myChart" width="900" height="380">INSERT D3 CHART SVG</canvas>

        <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="post in posts" :key="post.id">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div class="card-body">
                            <p class="card-text">{{post.text}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <h2>Post to moderate</h2>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
            <thead>
                <tr>
                <th scope="col">#id</th>
                <th scope="col">Category</th>
                <th scope="col">Auteur</th>
                <th scope="col">Created at</th>
                <th scope="col">Header</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody  v-for="post in posts" :key="post.id">
                <tr>
                    <td>{{post.id}}</td>
                    <td>{{post.CategoryId}}</td>
                    <td>{{post.User.firstname}} {{post.User.lastname}}</td>
                    <td>{{post.createdAt}}</td>
                    <td>text</td>
                    <td>
                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
                    <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        <h2>Comment to moderate</h2>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
            <thead>
                <tr>
                <th scope="col">#id</th>
                <th scope="col">Category</th>
                <th scope="col">Auteur</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                </tr>
            </thead>
            <tbody v-for="comment in comments" :key="comment.id">
                <tr>
                <td>{{comment.id}}</td>
                <td>{{comment.CategoryId}}</td>
                <td>#</td>
                <td>{{comment.createdAt}}</td>
                <td>text</td>
                </tr>
            </tbody>
            </table>
        </div>
        </main>
    </div>
    </div>
</body>
</template>

<style>
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }
    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
        font-size: 3.5rem;
        }
    }
</style>



<script>

import axios from "axios";
//import router from "../router";

// import "../main.css"; If i add style  ask where to put style.css


export default {
    name: "Main",
    data() {
        return {
            posts:[],
            comments:[],
            
        }
    },
    mounted () {
        // faire une requete dans le back pour voir si le token est tjrs valide est ce qu'il y un token estce qu'il est valide si oui recup les data
        axios.get("http://localhost:3000/api/post/admin",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
            console.log("pb fonction");
                if (res) {
                const rep = res.data;
                this.posts = rep;
                console.log(rep);
                }
        })
        .catch((error) =>{
            console.log(error);
            console.log ("c'est err 404");
        })
        axios.get("http://localhost:3000/api/comment/admin",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
            console.log("pb fonction");
                if (res) {
                const rep = res.data;
                this.comments = rep;
                console.log(rep);
                }
        })
        .catch((error) =>{
            console.log(error);
            console.log ("c'est err 404");
        })
    }
}
</script>
