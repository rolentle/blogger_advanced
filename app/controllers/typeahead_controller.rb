class TypeaheadController < ApplicationController
  def index
    render json: elastic_response
  end

  def elastic_response
    client = Elasticsearch::Client.new(host: 'localhost:9200')
    es_response = client.perform_request 'GET', "blog_search/article/_search?q=body:#{params[:query]}"
    EsResponse.new(es_response.body).formatted
  end


  class EsResponse
    def initialize(body)
      @results = body['hits']['hits']
    end

    def formatted
      @results.map do |result|
        result['_source']
      end
    end
  end
end
