import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Doc, Genre, ReleaseYear } from "../types/movie";

interface MovieCardProps {
    movie: Doc;
}


export function MovieCard({ movie }: MovieCardProps) {
    return (
        <Link to={`/${movie.id}`}>
            <Card>
                <CardActionArea>
                    {/* {movie.poster.url && (
                        <CardMedia
                            image={movie.poster.previewUrl ?? movie.poster.url}
                            title={movie.name}
                        />
                    )} */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.alternativeName && `Alternative Name: ${movie.alternativeName}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Type: {movie.type} ({movie.typeNumber})
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Year: {movie.year}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description: {movie.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.shortDescription && `Short Description: ${movie.shortDescription}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.status && `Status: ${movie.status}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Rating: {movie.rating.kp} (KP), {movie.rating.imdb} (IMDB), {movie.rating.filmCritics} (Film Critics), {movie.rating.russianFilmCritics} (Russian Film Critics), {movie.rating.await} (Await)
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Votes: {movie.votes.kp} (KP), {movie.votes.imdb} (IMDB), {movie.votes.filmCritics} (Film Critics), {movie.votes.russianFilmCritics} (Russian Film Critics), {movie.votes.await} (Await)
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.movieLength && `Movie Length: ${movie.movieLength} min`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.totalSeriesLength && `Total Series Length: ${movie.totalSeriesLength} min`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.seriesLength && `Series Length: ${movie.seriesLength} min`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.ratingMpaa && `MPAA Rating: ${movie.ratingMpaa}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.ageRating && `Age Rating: ${movie.ageRating}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Genres: {movie.genres?.map((genre: Genre) => genre.name).join(', ')}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Countries: {movie.countries.map((country: Genre) => country.name).join(', ')}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Release Years: {movie.releaseYears?.map((releaseYear: ReleaseYear) => `${releaseYear.start}${releaseYear.end ? `-${releaseYear.end}` : ''}`).join(', ')}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.top10 && `Top 10: ${movie.top10}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.top250 && `Top 250: ${movie.top250}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Is Series: {movie.isSeries ? 'Yes' : 'No'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Tickets on Sale: {movie.ticketsOnSale ? 'Yes' : 'No'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.enName && `English Name: ${movie.enName}`}
                        </Typography>
                        {movie.backdrop && (
                            <CardMedia
                                image={movie.backdrop.url}
                                title={`${movie.name} Backdrop`}
                            />
                        )}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}
