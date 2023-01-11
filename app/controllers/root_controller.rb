class RootController < ApplicationController
  def index
  end

  def show
    request.format = :json
    @greetings = Greeting.all
    render json: @greetings
  end
end
