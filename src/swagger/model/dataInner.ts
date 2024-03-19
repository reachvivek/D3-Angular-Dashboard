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

export interface DataInner { 
    /**
     * The end year of the data.
     */
    end_year?: number;
    /**
     * The intensity of the data.
     */
    intensity?: number;
    /**
     * The sector of the data.
     */
    sector?: string;
    /**
     * The topic of the data.
     */
    topic?: string;
    /**
     * The insight provided.
     */
    insight?: string;
    /**
     * The URL associated with the data.
     */
    url?: string;
    /**
     * The region associated with the data.
     */
    region?: string;
    /**
     * The start year of the data.
     */
    start_year?: number;
    /**
     * The impact of the data.
     */
    impact?: number;
    /**
     * The date and time when the data was added.
     */
    added?: Date;
    /**
     * The date and time when the data was published.
     */
    published?: Date;
    /**
     * The country associated with the data.
     */
    country?: string;
    /**
     * The relevance of the data.
     */
    relevance?: number;
    /**
     * The PESTLE category of the data.
     */
    pestle?: string;
    /**
     * The source of the data.
     */
    source?: string;
    /**
     * The title of the data.
     */
    title?: string;
    /**
     * The likelihood of the data.
     */
    likelihood?: number;
}