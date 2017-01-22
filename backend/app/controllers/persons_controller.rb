class PersonsController < ApplicationController
  before_action :set_persons, only: [:index]

  def index
    render json: @persons, status: :ok
  end

  private

    def set_persons
      @persons = Person.all
    end

    def person_params
      params.require(:person).permit(:name)
    end
end
