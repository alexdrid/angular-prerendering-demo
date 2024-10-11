import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  private postService = inject(PostService);

  private posts = signal<Post[]>([]);

  public postList = computed(() => {
    return this.posts().map(({userId, ...rest}) => ({
      ...rest,
      user: "Unkown"
    }));
  });

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts.set(data);
    });
  }
}
