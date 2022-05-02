import * as React from "react";
import { useEffect, useState } from "react";
import ArticleCard from "../../components/article-card/article-card";
import Searchbar from "../../components/searchbar/searchbar";
import "./page.blog.scss";

import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_iq2Tl8MyUBnhoST2Bkbo9KEmjbJs2q0",
    authDomain: "roe-blog.firebaseapp.com",
    projectId: "roe-blog",
    storageBucket: "roe-blog.appspot.com",
    messagingSenderId: "775369680990",
    appId: "1:775369680990:web:2e7e9a98d77d24ef21accf"
};




const mockData = {
    posts: [
        {
            imgURL: `https://picsum.photos/seed/${Math.random()}/550/350`,
            title: "Article 1 secondary",
            author: "unsky559",
            date: new Date(),
            previewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa recusandae cum obcaecati impedit itaque minus eos non amet nostrum!"
        },
        {
            imgURL: `https://picsum.photos/seed/${Math.random()}/550/350`,
            title: "Article 2 with a big and aws title sadasd asd sad asd asd asd ",
            author: "unsky559",
            date: new Date(),
            previewText: "Lorem elit. Ut ipsa recusandae cum obcaecati impedit itaque minus eos non amet nostrum!"
        },
        {
            imgURL: `https://picsum.photos/seed/${Math.random()}/550/350`,
            title: "Article 1",
            author: "unsky559",
            date: new Date(),
            previewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa recusandae cum obcaecati impedit itaque minus eos non amet nostrum!"
        },
        {
            imgURL: `https://picsum.photos/seed/${Math.random()}/550/350`,
            title: "Article 2",
            author: "unsky559",
            date: new Date(),
            previewText: "Lorem elit. Ut ipsa recusandae cum obcaecati impedit itaque minus eos non amet nostrum!"
        },
    ]
}

type postType = {
    imgURL: string,
    title: string,
    author: string,
    date: Date,
    previewText: string
}

const getPosts = () : Promise<Array<postType>> => {
    return new Promise((resolve, reject)=>{

        const app = initializeApp(firebaseConfig);

        const db = getFirestore(app);

        const querySnapshot = getDocs(collection(db, "posts")).then((data) => {
            const accum: Array<postType> = [];
            data.forEach((doc) => {
                const data = doc.data();
                data.date = data.date.toDate();

                accum.push(data as postType);
            });
            console.log(accum);
            resolve(accum);
        });
        console.log(mockData.posts);
        // resolve(mockData.posts);
    })
}

export default function PageBlog(){
    const postsState = useState< Array<postType> | [] >([]);

    useEffect(() => {
        getPosts().then((posts: Array<postType>) => {
            postsState[1](posts);
        })
    }, []);

    return (
        <div className="page-blog">
            <section className="search-area">
                <div className="container">
                    <Searchbar />
                </div>
            </section>
            <section className="articles">
                <div className="container">
                    <h1>Articles</h1>
                    <div className="articles">
                        {
                            postsState[0].map((post) => {
                                 return (<ArticleCard key={Math.random()} cardData={post}/>)
                            })
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
