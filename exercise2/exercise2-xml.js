const xml = `<products>
    {{#each this}}
        <product>
            <baseId>{{#if this.baseId}}{{this.baseId}}{{/if}}</baseId>
            <isActive>{{#if this.isActive}}{{this.isActive}}{{/if}}</isActive>
            <contentType>
                {{#if this.contentType}}
                    {{iterateContentType this.contentType}}
                {{/if}}
            </contentType>
            <features>
                {{#if this.feature}}
                    {{iterateFeature this.feature}}
                {{/if}}
            </features>
            <searchTerms>
                {{#if this.searchTerms}}
                    {{iterateSearchTerms this.searchTerms}}
                {{/if}}
            </searchTerms>
            <childProducts>
                {{#each this.childProducts}}
                    <childProduct>
                        <baseId>{{#if this.baseId}}{{this.baseId}}{{/if}}</baseId>
                        <isActive>{{#if this.isActive}}{{this.isActive}}{{/if}}</isActive>
                        <features>
                            {{#if this.feature}}
                                {{iterateFeature this.feature}}
                            {{/if}}
                        </features>
                        <searchTerms>
                            {{#if this.searchTerms}}
                                {{iterateSearchTerms this.searchTerms}}
                            {{/if}}
                        </searchTerms>
                    </childProduct>
                {{/each}}
            </childProducts>
        </product>
    {{/each}}
</products>`

module.exports = xml;