class Admin::DashboardsController < ApplicationController
  layout 'admin'
  before action :authenticate_admin!
  def index
    @users = User.all
  end
end
