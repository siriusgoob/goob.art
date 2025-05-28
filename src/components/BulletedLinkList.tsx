import { Link, List, ListItem, useTheme } from "@mui/material";

interface BulletedLinkListProps {
  links: Record<string, string> | undefined;
}

function BulletedLinkList({ links }: BulletedLinkListProps) {
  const theme = useTheme();

  return (
    <List sx={{ listStyleType: "disc", ml: 4 }}>
      {links &&
        Object.entries(links).map(([text, url]) => (
          <ListItem key={text} sx={{ display: "list-item" }}>
            <Link
              href={url}
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.primary }}
              target="_blank"
              variant="link"
            >
              {text}
            </Link>
          </ListItem>
        ))}
    </List>
  );
}

export default BulletedLinkList;
