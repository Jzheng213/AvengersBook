class RemovePicUrl < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profile_pic_url
    remove_column :users, :cover_photo_url
  end
end
