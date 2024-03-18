import { Component, OnInit } from '@angular/core';
import { filter, first, firstValueFrom } from 'rxjs';
import { DataService } from '../../../swagger';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  startYears: [] = [];
  endYears: [] = [];
  topics: [] = [];
  sectors: [] = [];
  pestles: [] = [];
  sources: [] = [];
  regions: [] = [];
  countries: [] = [];

  selectedStartYear: number | undefined;
  selectedEndYear: number | undefined;
  selectedTopic: string | undefined;
  selectedSector: string | undefined;
  selectedPestle: string | undefined;
  selectedSource: string | undefined;
  selectedRegion: string | undefined;
  selectedCountry: string | undefined;

  constructor(private dataService: DataService) {}

  async ngOnInit(): Promise<void> {
    const filters = await firstValueFrom(this.dataService.fetchAllFilters())
      .then((resp) => resp)
      .catch((err) => err);

    if (filters.start_year) {
      this.startYears = filters.start_year;
    }
    if (filters.end_year) {
      this.endYears = filters.end_year;
    }
    if (filters.topic) {
      this.topics = filters.topic;
    }
    if (filters.sector) {
      this.sectors = filters.sector;
    }
    if (filters.region) {
      this.regions = filters.region;
    }
    if (filters.pestle) {
      this.pestles = filters.pestle;
    }
    if (filters.country) {
      this.countries = filters.country;
    }
    if (filters.source) {
      this.sources = filters.source;
    }
  }
}
