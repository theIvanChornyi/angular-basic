import { ResolveFn } from '@angular/router';
import { Post, PostsService } from './post.service';
import { inject } from '@angular/core';
import { delay, of } from 'rxjs';

// export const PostResolver: ResolveFn<Post | undefined> = (route, state) => {
//     return inject(PostsService).getById(+route.params['id']);
// };
export const PostResolver: ResolveFn<Post | undefined> = (route, state) => {
    return of(inject(PostsService).getById(+route.params['id'])).pipe(
        delay(1500)
    );
};
