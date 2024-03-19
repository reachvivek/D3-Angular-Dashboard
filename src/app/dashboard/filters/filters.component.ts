import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../../swagger';
import { FilterService } from '../../filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  isLoading: boolean = true;

  startYears: [] = [];
  endYears: [] = [];
  topics: [] = [];
  sectors: [] = [];
  pestles: [] = [];
  sources: [] = [];
  regions: [] = [];
  countries: [] = [];

  selectedStartYear: any;
  selectedEndYear: any;
  selectedTopic: any;
  selectedSector: any;
  selectedPestle: any;
  selectedSource: any;
  selectedRegion: any;
  selectedCountry: any;

  populateFilters(filters: any) {
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

  constructor(
    private dataService: DataService,
    public filterService: FilterService
  ) {}

  async ngOnInit(): Promise<void> {
    const filters = await firstValueFrom(this.dataService.fetchAllFilters())
      .then((resp) => resp)
      .catch((err) => err);

    this.populateFilters(filters);

    this.isLoading = false;
  }

  filterChangeHandler(dropdownIdentifier: string) {
    let filtersApplied = [
      this.selectedStartYear,
      this.selectedEndYear,
      undefined,
      this.selectedSector,
      this.selectedTopic,
      this.selectedRegion,
      this.selectedPestle,
      this.selectedSource,
      this.selectedCountry,
    ];

    this.filterService.emitFilterChange([...filtersApplied]);
  }
}
