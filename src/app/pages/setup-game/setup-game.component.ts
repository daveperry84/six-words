import { Component, OnInit } from '@angular/core';
import { GameCategoriesService } from 'src/app/services/game-categories.service';
import { ICategory } from 'src/app/types/category.interface';
import { SetupGameService } from 'src/app/services/setup-game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.scss']
})
export class SetupGameComponent implements OnInit {
  public categories: Array<ICategory>;
  public selectedCategoryCount: number;

  private _gameCategoriesService: GameCategoriesService;
  private _setupGameService: SetupGameService;
  private _router: Router;
  
  constructor(gameCategoriesService: GameCategoriesService,
    setupGameService: SetupGameService,
    router: Router) {
    this._gameCategoriesService = gameCategoriesService;
    this._setupGameService = setupGameService;
    this._router = router;
  }
  
  ngOnInit(): void {
    this.categories = this._gameCategoriesService.getCategories();
    this.setSelectedCategoryCount();
  }

  public selectCategory(category: ICategory) {
    category.selected = !category.selected;
    this.setSelectedCategoryCount();
  }

  public playGameWithSetup(): void {
    const selectedCategories = this.categories.filter((category) => category.selected).map((category) => category.id);

    this._setupGameService.generateGameId(selectedCategories).subscribe((gameId) => {
      this._router.navigate(['play'], { queryParams: { gameId: gameId }});
    })
  }

  private setSelectedCategoryCount(): void {
    this.selectedCategoryCount = this.categories.filter((category) => category.selected).length;
  }

}
