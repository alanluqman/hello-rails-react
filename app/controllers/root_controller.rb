class RootController < ApplicationController
  def index
  end

  def show
    request.format = :json
    @greetings = Greeting.order(Arel.sql('RANDOM()')).first

    render json: @greetings
  end
end
