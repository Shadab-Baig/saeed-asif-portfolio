import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-graphic-designing',
  templateUrl: './graphic-designing.component.html',
  styleUrls: ['./graphic-designing.component.scss']
})
export class GraphicDesigningComponent implements OnInit {

  public loading = false;
  constructor(private router: Router , private service:CommonServiceService) { }

  public categories = [
    {
      name: 'HTML Templates',
      images: [
        { id: 13, path: 'portfolio/billboards/billboard-1.jpg' },
        { id: 14, path: 'portfolio/billboards/billboard-2.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-3.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-4.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-5.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-6.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-7.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-8.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-9.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-10.jpg' },
      ],
      categoryHeading: 'Billboards',
    },
    {
      name: 'Angular Templates',
      images: [
        {
          id: 16,
          path: 'portfolio/logos/urbay-logo.jpg',
        },
        { id: 17, path: 'portfolio/logos/umer-hospital-logo-mockups.jpg' },
        { id: 18, path: 'portfolio/logos/two-sotuh-vellow-logo.jpg' },
        { id: 19, path: 'portfolio/logos/Shadow-logo-mockups.jpg' },
        { id: 20, path: 'portfolio/logos/Roclle-logo-mockups.jpg' },
        { id: 21, path: 'portfolio/logos/kammarh-logo-mockups.jpg' },
        { id: 22, path: 'portfolio/logos/donna-logo-mockups.jpg' },
        { id: 22, path: 'portfolio/logos/alfredo-tour-mockups.jpg' },
        { id: 22, path: 'portfolio/logos/akamas-logo-mockups.jpg' },
        { id: 22, path: 'portfolio/logos/295j-logo.jpg' },
      ],
      categoryHeading: 'Logos',
    },
    {
      name: 'Email Templates',
      images: [
        { id: 23, path: 'portfolio/thumbnails/thumbnail-1.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-2.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-3.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-4.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-5.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-6.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-7.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-8.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-9.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-10.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-11.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-12.jpg' },
      ],
      categoryHeading: 'Thumbnails',
    }
  ];

  currentCategory: any = this.categories[0];
  name: string = `${this.categories[0].name}`;
  select(selectVal: string) {
    for (let i = 0; i < this.categories.length; i++) {
      let token = this.categories[i].name.includes(selectVal)
      if (token === true) {
        this.showCategory(this.categories[i])
      }
    }
  }
  ngOnInit(): void {
    const savedCategory = this.categories.find(category => category.categoryHeading === this.service.currentCategoryHeading);
    if(savedCategory){
      this.showCategory(savedCategory);
    }
  }

  showCategory(category: any) {
    this.loading = true;
    this.currentCategory = category;
    this.service.currentCategoryHeading = category.categoryHeading
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  gotoDetails(image: any, i:any) {
    const id = image.id;
    const detailImages = image.detailImages;
    const bgImage = image.path;
    const selected = {
      ...image,
      category: this.currentCategory.images,
      selectedCategory:this.currentCategory,
      index: i 
    };
    this.router.navigate(['portfolioDetails', id], {
      state: {
        images: detailImages,
        bgImage,
        selected
      },
    });
  }
  
  public  goback(): void {
    this.router.navigate(['portfolio']);
  }

}
