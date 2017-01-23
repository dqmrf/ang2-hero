class PersonsController < ApplicationController
  before_action :set_person, only: [:show, :update, :create, :destroy]
  # before_action :set_persons, only: [:index]
  
  def index
    qname = params[:name]
    binding.pry
    if !(qname.nil? && qname.empty?)
      @persons = Person.where(name: qname)
    else
      set_persons
    end
    render json: @persons, status: :ok
  end

  def show
    render json: @person, status: :ok
  end

  def update
    render json: @person, status: :ok if @person.update(person_params)
  end

  def create
    @person = Person.new(person_params)
    render json: @person, status: :created if @person.save
  end

  def destroy
    @person.destroy
    head(204)
  end

  private

    def set_person
      if Person.exists?(params[:id])
        @person = Person.find(params[:id])
      end
    end

    def set_persons
      @persons = Person.all
    end

    def person_params
      params.require(:person).permit(:name)
    end
end
