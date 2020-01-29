#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const postsDir = path.resolve(path.join(__dirname, "_posts"));
const authorsDir = path.resolve(path.join(__dirname, "_authors"));
const categoriesDir = path.resolve(path.join(__dirname, "blog/category"));

const posts = fs.readdirSync(postsDir);
const postPaths = posts.map(post => {
  const parts = post.replace(".markdown", "").split("-");
  const oldPath = `/blog/${parts.slice(0, 3).join("/")}/${parts
    .slice(3)
    .map(part => part.split(" ").join("-"))
    .join("-")}`;
  return `${oldPath} -> https://blog.yellowco.co${oldPath} 301`;
});

const authors = fs.readdirSync(authorsDir);
const authorPaths = authors.map(author => {
  const oldPath = `/author/${author.replace(".markdown", "")}`;
  return `${oldPath} -> https://blog.yellowco.co${oldPath} 301`;
});

const categories = fs.readdirSync(categoriesDir);
const categoryPaths = categories.map(category => {
  const oldPath = `/blog/category/${category.replace(".markdown", "")}`;
  return `${oldPath} -> https://blog.yellowco.co${oldPath} 301`;
});

const paths = [...postPaths, ...authorPaths, ...categoryPaths];
paths.forEach(redirect => console.log(redirect));
