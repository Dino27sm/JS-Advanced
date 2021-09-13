function attachEvents() {
    let urlPosts = 'http://localhost:3030/jsonstore/blog/posts/';
    let urlComments = 'http://localhost:3030/jsonstore/blog/comments/';

    let postsButtonElm = document.getElementById('btnLoadPosts');
    let viewButtonElm = document.getElementById('btnViewPost');

    postsButtonElm.addEventListener('click', getPosts);
    viewButtonElm.addEventListener('click', getComments);

    async function getComments(){
        let selectElm = document.getElementById('posts');
        let salectValue = selectElm.value;
        let ulCommentsElm = document.getElementById('post-comments');
        ulCommentsElm.innerHTML = '';
        
        let response = await fetch(urlPosts + salectValue);
        let data = await response.json();
        document.getElementById('post-body').textContent = data.body;
        document.getElementById('post-title').textContent = data.title;

        let commentResponse = await fetch(urlComments);
        let commentData = await commentResponse.json();

        let postCooments = Object.values(commentData).filter(x => x.postId == salectValue);
        postCooments.forEach(x => {
            let liElm = document.createElement('li');
            liElm.id = x.id;
            liElm.textContent = x.text;
            ulCommentsElm.appendChild(liElm);
        });
    }

    async function getPosts(){
        let selectElm = document.getElementById('posts');
        selectElm.textContent = '';

        let postResponse = await fetch(urlPosts);
        let postData = await postResponse.json();

        Object.values(postData)
        .forEach(x => selectElm.appendChild(createOption('option', x.id, x.title)));
    }

    function createOption(elmType, attributeValue, postName){
        let newElm = document.createElement(elmType);
        newElm.value = attributeValue;
        newElm.textContent = postName;
        return newElm;
    }
}

attachEvents();
