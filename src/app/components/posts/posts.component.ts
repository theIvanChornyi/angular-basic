import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
    public showIds = false;

    constructor(
        public postsService: PostsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params: Params) => {
            this.showIds = !!+params['showIds'];
        });
        this.route.fragment.subscribe();
    }

    handleShowIds() {
        this.router.navigate(['/posts'], {
            queryParams: { showIds: this.showIds ? 0 : 1 },
            fragment: 'programFragment',
        });
    }
}
