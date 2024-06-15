import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Doc } from "../../features/movies/types/movie";

interface MovieCardProps {
    movie: Doc;
}


export function MovieCard({ movie }: MovieCardProps) {
    const { name, alternativeName, year, rating } = movie
    return (
        <Card >
            <CardActionArea>
                {/* {poster.previewUrl && poster.url && (
                    <img src={poster.previewUrl ?? poster.url} alt={movie.name} />
                )} */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name ?? alternativeName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {year}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
						{rating.imdb}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}