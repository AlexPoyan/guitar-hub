pub fn is_first_bigger(first: u64, second: u64) -> bool {
    first > second
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn first_is_bigger() {
        let result = is_first_bigger(4, 3);
        assert!(result);
    }

    #[test]
    fn second_is_bigger() {
        let result = is_first_bigger(5, 4);
        assert!(!result);
    }

    #[test]
    fn are_equal() {
        let result = is_first_bigger(4, 4);
        assert!(!result);
    }
}
