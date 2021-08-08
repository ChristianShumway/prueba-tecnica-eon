import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostDataSource } from './post-datasource';
import { PostService } from '@core/services/post/post.service';
import { Post, ComentarioPost } from '@core/models/post';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ComentariosPostComponent } from '../comentarios-post/comentarios-post.component';
import { EnterTop, EnterRight, EnterBottom, EnterLeft, EnterNoMove,  } from './../../../../utils/animations-intro';

@Component({
  selector: 'app-table-post',
  templateUrl: './table-post.component.html',
  styleUrls: ['./table-post.component.scss'],
  animations: [ EnterTop, EnterBottom, EnterLeft, EnterRight, EnterNoMove]
})

export class TablePostComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Post>;
  dataSource: PostDataSource;
  displayedColumns = ['id', 'title', 'actions'];
  cargandoPosts: boolean = true;
  img = 'https://images.unsplash.com/photo-1547127796-06bb04e4b315?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80';

  constructor(
    private postService: PostService,
    private bottomSheet: MatBottomSheet
  ) {
    this.dataSource = new PostDataSource();
  }
  ngOnInit() {
    this.getPosts();
  }
  
  ngAfterViewInit(): void {
    this.modifPaginator();
  }

  getPosts() {
    this.postService.getPosts().subscribe(
      response => {
        this.cargandoPosts = false;
        this.dataSource.posts = response; 
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      },
      error => {
        console.log(error);
      }
    );
  }

  verComentarios(post: Post) {
    this.postService.comentariosPost(post.id).subscribe(
      response => {
        this.modalComentarios(response, post.title);
      },
      error => {
        console.log(error);
      }
    );
  }

  modalComentarios(comentarios: ComentarioPost[], titulo: string) {
    let sheet = this.bottomSheet.open(ComentariosPostComponent, {
      data: { 
        comentarios,
        titulo: titulo
      }
    });
  }

  modifPaginator() {
    this.paginator._intl.itemsPerPageLabel = "posts por pagina"
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} de ${length}`;
    };
  }

}
