class PersonsController < ApplicationController
  before_action :set_person, only: [:show, :update, :create, :destroy]
  
  def index
    qname = params[:name]
    if qname && !(qname.nil? && qname.empty?)
      @persons = current_user.persons.where("name LIKE ?", "%#{qname}%").order(created_at: :desc)
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
      if current_user.persons.exists?(params[:id])
        @person = current_user.persons.find(params[:id])
      end
    end
    
    def person_params
      params.require(:person).permit(:name)
    end
end
