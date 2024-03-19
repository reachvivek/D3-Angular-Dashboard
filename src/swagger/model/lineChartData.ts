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
 */
import { LineSeriesItem } from './lineSeriesItem';

export interface LineChartData { 
    /**
     * The name of the series (e.g., \"Social\", \"Lifestyles\")
     */
    name?: string;
    series?: Array<LineSeriesItem>;
}