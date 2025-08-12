import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Intro } from './intro/intro';
import { TableOfContents } from './table-of-contents/table-of-contents';
import { AboutMe } from './about-me/about-me';
import { MyWork } from './my-work/my-work';
import { MySkills } from './my-skills/my-skills';
import { Brands } from './brands/brands';
import { BrandInfo } from './brand-info/brand-info';
import { StatisticsOnly } from './statistics-only/statistics-only';
import { Contribution } from './contribution/contribution';
import { Statistics2 } from './statistics-2/statistics-2';
import { Perfume } from './perfume/perfume';
import { PerfumeResults } from './perfume-results/perfume-results';
import { HighSociety } from './high-society/high-society';
import { RealEstate } from './real-estate/real-estate';
import { Important } from './important/important';
import { TopResults } from './top-results/top-results';
import { ServicesResults } from './services-results/services-results';
import { NextSteps } from './next-steps/next-steps';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Intro, TableOfContents, AboutMe, MySkills,
    MyWork, Brands, BrandInfo, StatisticsOnly, Contribution, Statistics2, Perfume, PerfumeResults,
    HighSociety, RealEstate, Important, TopResults, ServicesResults, NextSteps],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected title = 'marketing-portfolio';
}
