/**
 * Blackcoffer Assignment
 * Backend server defining RESTful APIs of Blackcoffer Frontend
 *
 * OpenAPI spec version: 2.0.0
 * Contact: rogerthatvksingh@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { Data } from '../model/data';
import { Filters } from '../model/filters';
import { LineChartData } from '../model/lineChartData';
import { PieChartData } from '../model/pieChartData';
import { StackedBarChartData } from '../model/stackedBarChartData';
import { VerticalBarChartData } from '../model/verticalBarChartData';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  protected basePath = 'http://localhost:3000';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * Fetch All Datas
   *
   * @param start_year Filter by start year
   * @param end_year Filter by end year
   * @param intensity Filter by intensity
   * @param sector Filter by sector
   * @param topic Filter by topic
   * @param region Filter by region
   * @param pestle Filter by PESTLE
   * @param source Filter by source
   * @param country Filter by country
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public fetchAllEvents(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Data>;
  public fetchAllEvents(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Data>>;
  public fetchAllEvents(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Data>>;
  public fetchAllEvents(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (start_year !== undefined && start_year !== null) {
      queryParameters = queryParameters.set('start_year', <any>start_year);
    }
    if (end_year !== undefined && end_year !== null) {
      queryParameters = queryParameters.set('end_year', <any>end_year);
    }
    if (intensity !== undefined && intensity !== null) {
      queryParameters = queryParameters.set('intensity', <any>intensity);
    }
    if (sector !== undefined && sector !== null) {
      queryParameters = queryParameters.set('sector', <any>sector);
    }
    if (topic !== undefined && topic !== null) {
      queryParameters = queryParameters.set('topic', <any>topic);
    }
    if (region !== undefined && region !== null) {
      queryParameters = queryParameters.set('region', <any>region);
    }
    if (pestle !== undefined && pestle !== null) {
      queryParameters = queryParameters.set('pestle', <any>pestle);
    }
    if (source !== undefined && source !== null) {
      queryParameters = queryParameters.set('source', <any>source);
    }
    if (country !== undefined && country !== null) {
      queryParameters = queryParameters.set('country', <any>country);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<Data>(
      'get',
      `${this.basePath}/data/fetch_all_events`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Fetch All Unique Filters
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public fetchAllFilters(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Filters>;
  public fetchAllFilters(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Filters>>;
  public fetchAllFilters(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Filters>>;
  public fetchAllFilters(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<Filters>(
      'get',
      `${this.basePath}/data/fetch_all_filters`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Get data for line chart
   *
   * @param start_year Filter by start year
   * @param end_year Filter by end year
   * @param intensity Filter by intensity
   * @param sector Filter by sector
   * @param topic Filter by topic
   * @param region Filter by region
   * @param pestle Filter by PESTLE
   * @param source Filter by source
   * @param country Filter by country
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public lineChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LineChartData>;
  public lineChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LineChartData>>;
  public lineChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LineChartData>>;
  public lineChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (start_year !== undefined && start_year !== null) {
      queryParameters = queryParameters.set('start_year', <any>start_year);
    }
    if (end_year !== undefined && end_year !== null) {
      queryParameters = queryParameters.set('end_year', <any>end_year);
    }
    if (intensity !== undefined && intensity !== null) {
      queryParameters = queryParameters.set('intensity', <any>intensity);
    }
    if (sector !== undefined && sector !== null) {
      queryParameters = queryParameters.set('sector', <any>sector);
    }
    if (topic !== undefined && topic !== null) {
      queryParameters = queryParameters.set('topic', <any>topic);
    }
    if (region !== undefined && region !== null) {
      queryParameters = queryParameters.set('region', <any>region);
    }
    if (pestle !== undefined && pestle !== null) {
      queryParameters = queryParameters.set('pestle', <any>pestle);
    }
    if (source !== undefined && source !== null) {
      queryParameters = queryParameters.set('source', <any>source);
    }
    if (country !== undefined && country !== null) {
      queryParameters = queryParameters.set('country', <any>country);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<LineChartData>(
      'get',
      `${this.basePath}/data/line_chart_data`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Get data for pie chart
   *
   * @param start_year Filter by start year
   * @param end_year Filter by end year
   * @param intensity Filter by intensity
   * @param sector Filter by sector
   * @param topic Filter by topic
   * @param region Filter by region
   * @param pestle Filter by PESTLE
   * @param source Filter by source
   * @param country Filter by country
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public pieChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<PieChartData>;
  public pieChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<PieChartData>>;
  public pieChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<PieChartData>>;
  public pieChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (start_year !== undefined && start_year !== null) {
      queryParameters = queryParameters.set('start_year', <any>start_year);
    }
    if (end_year !== undefined && end_year !== null) {
      queryParameters = queryParameters.set('end_year', <any>end_year);
    }
    if (intensity !== undefined && intensity !== null) {
      queryParameters = queryParameters.set('intensity', <any>intensity);
    }
    if (sector !== undefined && sector !== null) {
      queryParameters = queryParameters.set('sector', <any>sector);
    }
    if (topic !== undefined && topic !== null) {
      queryParameters = queryParameters.set('topic', <any>topic);
    }
    if (region !== undefined && region !== null) {
      queryParameters = queryParameters.set('region', <any>region);
    }
    if (pestle !== undefined && pestle !== null) {
      queryParameters = queryParameters.set('pestle', <any>pestle);
    }
    if (source !== undefined && source !== null) {
      queryParameters = queryParameters.set('source', <any>source);
    }
    if (country !== undefined && country !== null) {
      queryParameters = queryParameters.set('country', <any>country);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<PieChartData>(
      'get',
      `${this.basePath}/data/pie_chart_data`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Get data for stacked bar chart
   *
   * @param start_year Filter by start year
   * @param end_year Filter by end year
   * @param intensity Filter by intensity
   * @param sector Filter by sector
   * @param topic Filter by topic
   * @param region Filter by region
   * @param pestle Filter by PESTLE
   * @param source Filter by source
   * @param country Filter by country
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public stackedBarChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<StackedBarChartData>;
  public stackedBarChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<StackedBarChartData>>;
  public stackedBarChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<StackedBarChartData>>;
  public stackedBarChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (start_year !== undefined && start_year !== null) {
      queryParameters = queryParameters.set('start_year', <any>start_year);
    }
    if (end_year !== undefined && end_year !== null) {
      queryParameters = queryParameters.set('end_year', <any>end_year);
    }
    if (intensity !== undefined && intensity !== null) {
      queryParameters = queryParameters.set('intensity', <any>intensity);
    }
    if (sector !== undefined && sector !== null) {
      queryParameters = queryParameters.set('sector', <any>sector);
    }
    if (topic !== undefined && topic !== null) {
      queryParameters = queryParameters.set('topic', <any>topic);
    }
    if (region !== undefined && region !== null) {
      queryParameters = queryParameters.set('region', <any>region);
    }
    if (pestle !== undefined && pestle !== null) {
      queryParameters = queryParameters.set('pestle', <any>pestle);
    }
    if (source !== undefined && source !== null) {
      queryParameters = queryParameters.set('source', <any>source);
    }
    if (country !== undefined && country !== null) {
      queryParameters = queryParameters.set('country', <any>country);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<StackedBarChartData>(
      'get',
      `${this.basePath}/data/stacked_bar_chart_data`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Get data for vertical bar chart
   *
   * @param start_year Filter by start year
   * @param end_year Filter by end year
   * @param intensity Filter by intensity
   * @param sector Filter by sector
   * @param topic Filter by topic
   * @param region Filter by region
   * @param pestle Filter by PESTLE
   * @param source Filter by source
   * @param country Filter by country
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public verticalBarChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<VerticalBarChartData>;
  public verticalBarChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<VerticalBarChartData>>;
  public verticalBarChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<VerticalBarChartData>>;
  public verticalBarChartData(
    start_year?: number,
    end_year?: number,
    intensity?: number,
    sector?: string,
    topic?: string,
    region?: string,
    pestle?: string,
    source?: string,
    country?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (start_year !== undefined && start_year !== null) {
      queryParameters = queryParameters.set('start_year', <any>start_year);
    }
    if (end_year !== undefined && end_year !== null) {
      queryParameters = queryParameters.set('end_year', <any>end_year);
    }
    if (intensity !== undefined && intensity !== null) {
      queryParameters = queryParameters.set('intensity', <any>intensity);
    }
    if (sector !== undefined && sector !== null) {
      queryParameters = queryParameters.set('sector', <any>sector);
    }
    if (topic !== undefined && topic !== null) {
      queryParameters = queryParameters.set('topic', <any>topic);
    }
    if (region !== undefined && region !== null) {
      queryParameters = queryParameters.set('region', <any>region);
    }
    if (pestle !== undefined && pestle !== null) {
      queryParameters = queryParameters.set('pestle', <any>pestle);
    }
    if (source !== undefined && source !== null) {
      queryParameters = queryParameters.set('source', <any>source);
    }
    if (country !== undefined && country !== null) {
      queryParameters = queryParameters.set('country', <any>country);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<VerticalBarChartData>(
      'get',
      `${this.basePath}/data/vertical_bar_chart_data`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
