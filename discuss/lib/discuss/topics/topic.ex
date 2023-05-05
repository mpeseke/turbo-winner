defmodule Discuss.Topic do
  use Ecto.Schema
  import Ecto.Changeset
  alias Discuss.Topic

  schema "topics" do
    field :title, :string
    field :inserted_at, :utc_datetime
    field :updated_at, :utc_datetime
  end

  def changeset(%Topic{} = topic, attrs \\ %{}) do
    topic
    |> cast(attrs, [:title])
    |> validate_required([:title])
    |> validate_length(:title, min: 5)
    |> unique_constraint(:title)
  end

end
