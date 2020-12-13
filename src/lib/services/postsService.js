class PostsService {
    #postsEndpoint = 'https://jsonplaceholder.typicode.com/posts'

    fetchPosts() {
        return fetch(this.#postsEndpoint)
            .then((res) => res.json())
            .then((posts) => posts)
    }

    fetchPost(postId) {
        return fetch(`${this.#postsEndpoint}/${postId}`)
            .then((res) => res.json())
            .then((post) => post)
    }
}

export const postsService = new PostsService()
