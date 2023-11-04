import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Post from "./TPost";

function GetPosts() {
    let files: path.ParsedPath[] = [];
    // read every file in posts directory
    fs.readdirSync("posts").forEach(file => {
        files.push(path.parse(file));
    })

    let posts: Post[] = [];
    // use gray matter to get the title of each post
    files.forEach(file => {
        let fileContents = fs.readFileSync(`posts/${file.base}`, "utf8");
        let { data, content } = grayMatter(fileContents);
        posts.push({
            slug: file.name,
            title: data.title,
            published: data.published,
            edited: data.edited,
            content: content,
            image: data.image
        });
    })

    return posts;
}

export default GetPosts;